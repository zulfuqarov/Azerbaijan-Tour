import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import TravleModuleSchema from "./module/module.js";
import AdminRegister from "./module/Admin.js";
import nodemailer from "nodemailer";
import TravleMoreInfo from "./module/TravleInfon.js";
import BlogComment from "./module/BlogComment.js";
import axios from "axios";

const PORT = 5555;
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

dotenv.config();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// mogoDB conncet start
mongoose
  .connect(process.env.MadinaTravleConnectLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connceting");
  })
  .catch((error) => {
    console.log(error);
  });

// mogoDB conncet end

// get post put delete

// ADD TRAVLE START
app.post("/Add-Travle", async (req, res) => {
  try {
    if (
      req.body.BodyTravleName &&
      req.body.BodyTravleComment &&
      req.body.BodyTravlePrice &&
      req.body.BodyTravleOldPrice &&
      req.body.BodyTravleImg
    ) {
      const newTravle = new TravleModuleSchema({
        TravleName: req.body.BodyTravleName,
        TravleComment: req.body.BodyTravleComment,
        TravlePrice: req.body.BodyTravlePrice,
        TravleOldPrice: req.body.BodyTravleOldPrice,
        TravleImg: req.body.BodyTravleImg,
      });
      const Travle = await newTravle.save();
      res.status(200).json(Travle);
    } else {
      return res.status(400).json({ message: "butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/TravleInfo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (
      req.body.InputTourPlan &&
      req.body.InputLocation &&
      req.body.InputGallery &&
      req.body.InputInformation
    ) {
      const newTravleInfo = new TravleMoreInfo({
        TourPlan: req.body.InputTourPlan,
        Location: req.body.InputLocation,
        Gallery: req.body.InputGallery.split(","),
        Information: req.body.InputInformation,
        TravleId: id,
      });
      const TravleInfoSave = await newTravleInfo.save();
      res.status(200).json(TravleInfoSave);
    } else {
      return res.status(400).json({ message: "butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(error);
  }
});
// ADD TRAVLE START

// Delete Travle Start
app.delete("/Delete-Travle/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await TravleMoreInfo.findOneAndDelete({
      TravleId: id,
    });
    const DeleteTravle = await TravleModuleSchema.findByIdAndDelete({
      _id: id,
    });

    if (!DeleteTravle) {
      res.status(400).json({ message: "Travle not found" });
    } else {
      res
        .status(200)
        .json({
          message: "Travle başarıyla silindi",
          deletedItem: DeleteTravle,
        });
    }
  } catch (error) {
    console.log(error);
  }
});
// Delete Travle End

// SING,REGISTER ADMIN START
app.post("/Register-Admin", async (req, res) => {
  try {
    if (
      req.body.InputName &&
      req.body.InputEmail &&
      req.body.InputPassword &&
      req.body.InputPhoneNumber
    ) {
      const newAdmin = new AdminRegister({
        fullname: req.body.InputName,
        email: req.body.InputEmail,
        password: req.body.InputPassword,
        userType: req.body.InputUserType,
        phoneNumber: req.body.InputPhoneNumber,
        AdminFoto: req.body.InputAdminFoto,
      });
      const AdminCheckEmail = await AdminRegister.findOne({
        email: req.body.InputEmail,
      });
      if (AdminCheckEmail) {
        return res
          .status(400)
          .json({ message: "This email is already available/existing." });
      }
      const hashedPassword = await bcrypt.hash(req.body.InputPassword, 10);
      newAdmin.password = hashedPassword;

      const AdminSave = await newAdmin.save();
      res.status(200).json(AdminSave);
    } else {
      return res.status(400).json({ message: "Butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(eroor);
  }
});
app.post("/Admin-Sign", async (req, res) => {
  try {
    const AdminSignEmail = await AdminRegister.findOne({
      email: req.body.InputAdminEmailSign,
    });
    if (!AdminSignEmail) {
      return res
        .status(400)
        .json({ message: "Email ve Kodu tekrar yoxlayin!!" });
    }
    const AdminSignPassword = await bcrypt.compare(
      req.body.InputAdminPassword,
      AdminSignEmail.password
    );
    if (!AdminSignPassword) {
      return res
        .status(400)
        .json({ message: "Email ve Kodu tekrar yoxlayin!!" });
    }

    const payload = {
      sub: AdminSignEmail._id,
      name: AdminSignEmail.fullname,
      email: AdminSignEmail.email,
      AdminFoto: AdminSignEmail.AdminFoto,
    };

    const token = await jwt.sign(payload, process.env.TokenSecretCode, {
      expiresIn: "3d",
    });
    res.cookie("jwtToken", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(200).json({
      AdminSignEmail,
      message: "Girisiniz ugurla tamamlandi",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
});
// SING,REGISTER ADMINEND

// Blog Comment post  start
app.post("/Blog-Comment", async (req, res) => {
  const { Id } = req.query;
  try {
    if (req.body.BlogCommentNama && req.body.BlogCommentMessage) {
      const newBlogComment = new BlogComment({
        PersonName: req.body.BlogCommentNama,
        BlogComment: req.body.BlogCommentMessage,
        BlogId: Id,
      });
      const savenewBlogComment = await newBlogComment.save();
      res.status(200).json(savenewBlogComment);
    } else {
      return res.status(400).json({ message: "Butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(error);
  }
});
// Blog Comment post  end

// token ceheck start
const CheckToken = async (req, res, next) => {
  const token = req.cookies.jwtToken;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Kimlik dogrulamasi ugursuz oldu... Yeniden deneyin" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.TokenSecretCode);
    req.user = await AdminRegister.findById(decodedToken.sub);
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "JWT süresi doldu. Lütfen tekrar oturum açın." });
    } else {
      // Diğer JWT hata durumlarını burada işleyebilirsiniz
      console.error(error);
      return res.status(500).json({ message: "Sunucu hatası" });
    }
  }
};
// token ceheck end

// TRAVLE GET START
app.get("/", async (req, res) => {
  try {
    const GetTravle = await TravleModuleSchema.find();
    res.status(200).json(GetTravle);
  } catch (error) {
    console.log(error);
  }
});
app.get("/TravleInfo", async (req, res) => {
  try {
    const GetTravleInfo = await TravleMoreInfo.find();
    res.status(200).json(GetTravleInfo);
  } catch (error) {
    console.log(error);
  }
});
// TRAVLE GET END

// ADIMN GET START
app.get("/Admin", CheckToken, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      name: user.fullname,
      email: user.email,
      AdminFoto: user.AdminFoto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});
// ADMIN GET END

// Travle Get infio start
app.get("/Travle-Info/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const travleInfo = await TravleModuleSchema.findById(id);
    if (!travleInfo) {
      return res.status(400).json({ message: "Travle tapilmadi" });
    }
    res.json(travleInfo);
  } catch (error) {
    console.log(error);
  }
});
// Travle Get infio end

// More Travle info start
app.get("/More-Travle-Info/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const MoreInfoTravle = await TravleMoreInfo.findOne({
      TravleId: id,
    });
    if (!MoreInfoTravle) {
      return res.status(400).json({ message: "More Travle Info tapilmadi" });
    }
    res.status(200).json(MoreInfoTravle);
  } catch (error) {
    console.log(error);
  }
});
// More Travle info end

app.get("/send-Email", async (req, res) => {
  const { comment, name, subject, email } = req.query;
  // if (!to) {
  //     return res.status(400).send("e-posta adres yeniden yazin")
  // }
  try {
    const transporter = nodemailer.createTransport({
      host: "admin.zulfiqarovnebi.com.tr",
      port: 465,
      secure: true,
      auth: {
        user: "admin@zulfiqarovnebi.com.tr",
        pass: "3865606rt.",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = await transporter.sendMail({
      from: "admin@zulfiqarovnebi.com.tr",
      to: "zulfuqarov.nebi@gmail.com",
      subject: "Tour Azerbaijan",
      html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
              <h1 style="color: #333; text-align: center; ">Name: ${name}</h1>
              <h2 style="color: #333;">Email: ${email}</h2>
              <h3 style="color: #333;">Subject: ${subject}</h3>
              <p style="color: #333;">Message: ${comment}</p>
            </div>
          `,
    });
    console.log("message sent" + info.messageId);
    res.send("E-posta gönderildi.");
  } catch (error) {
    console.log(error);
    res.status(500).send("E-posta gönderilemedi.");
  }
});

app.get("/Map/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const LocationId = await TravleMoreInfo.findOne({
      TravleId: id,
    });
    if (!LocationId) {
      res.status(400).json({ message: "Location tapilmadi" });
    }
    const cvb = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${LocationId.Location}`
    );
    res.status(200).json(cvb.data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/Map", async (req, res) => {
  const { locations } = req.query;
  console.log(locations);
  try {
    if (locations) {
      const cvb = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${locations}`
      );
      res.status(200).json(cvb.data);
    } else {
      res.status(400).json({ message: "seher duzgun daxil olunmadi" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/Blog-Comment", async (req, res) => {
  const { Id } = req.query;
  try {
    const BlogCommentGet = await BlogComment.find({
      BlogId: Id,
    });
    if (!BlogCommentGet || BlogCommentGet.length === 0) {
      return res.status(400).json({ message: "Blog Comment tapilmadi!" });
    }
    res.status(200).json(BlogCommentGet);
  } catch (error) {
    console.log(error);
  }
});
// POST LISTEN START
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// POSR LISTEN END
