const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());

app.get("/yoyoy", (req, res) => {
    res.send("Yoyoy");
});

app.post("/login", (req, res) => {
    if (req.body.username != "prawito") {
        return res.json({
            status: false,
            error: "Username atau password salah.",
            result: {},
        });
    }

    res.json({
        status: true,
        error: null,
        result: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJyZXF1ZXN0SUQiOiIwMDExM2MwZC1lODBjLTRhYjQtOTVhYS1iZDliY2QxY2RiOTciLCJpZF91c2VyIjo2LCJ1c2VybmFtZSI6ImN1c3RvbWVyNCIsImxvZ2luX2FzIjoxLCJleHAiOjE2MzM5MzUyOTJ9.88jU1JVnxYxIaISd_5ma--kky_jfxsTJY7U1blJnVz0",
        },
    });
});

app.post("/register", (req, res) => {
    if (req.body.username === "prawito") {
        return res.json({
            status: false,
            error: "Username sudah pernah terdaftar.",
            result: {},
        });
    }
    res.json({
        status: true,
        error: null,
        result: {
            username: req.body.username,
            login_as: 1,
        },
    });
});

app.get("/checkapply", (req, res) => {
    res.json({
        status: true,
        error: null,
        result: {
            message: "Anda tidak sedang mengajukan KPR saat ini",
        },
    });
});

app.get("/getidentity", (req, res) => {
    // if (true) {
    //     return res.json({
    //         status: true,
    //         error: null,
    //         result: {},
    //     });
    // }

    res.json({
        status: true,
        error: null,
        result: {
            id_cust: 1,
            nik: "12345678910",
            nama_lengkap: "Asep Sunandar",
            tempat_lahir: "Bandung",
            tanggal_lahir: "07/08/1980",
            alamat: "Bojongsoang no.180 Bandung",
            pekerjaan: "Seniman",
            pendapatan_perbulan: 5000000,
            bukti_ktp: "file_selfie_ktp.pdf",
            bukti_gaji: "file_bukti_gaji.pdf",
            status: "Tidak terverifikasi",
        },
    });
});

app.get("/getsubmission", (req, res) => {
    // if (true) {
    //     return res.json({
    //         status: true,
    //         error: null,
    //         result: {},
    //     });
    // }

    res.json({
        status: true,
        error: null,
        result: {
            id_kelengkapan: 0,
            id_cust: 6,
            id_pengajuan: 1,
            alamat_rumah: "Jl.Permai 5 No.11A, Komplek Cipadung Permai1 ",
            luas_tanah: 501,
            harga_rumah: 500000001,
            jangka_pembayaran: 3,
            dokumen_pendukung: "pendukung1.pdf",
            status_kelengkapan: "Menunggu Persetujuan",
        },
    });
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
