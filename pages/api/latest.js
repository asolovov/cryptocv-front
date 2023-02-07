import * as fs from "fs";

export default async function handler(req, res) {
    const file = fs.createReadStream(`public/latest.pdf`);
    const stat = fs.statSync(`public/latest.pdf`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=asolovov_cv.pdf');
    file.pipe(res);
}
