const multer = require('multer');

const upload = multer({
  storage: multer.MemoryStorage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/gif' || file.mimetype == 'image/jpeg') { 
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

 module.exports = upload;