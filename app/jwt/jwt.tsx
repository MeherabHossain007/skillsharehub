app.post("/api/v1/auth/access-token", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secret, { expiresIn: 60 * 60 });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    })
    .send({ success: true });
});

const gateman = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send({ message: "You are not authorized" });
  }

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: "You are not authorized" });
    }

    req.user = decoded;
    console.log("The decoded message", req.user);
    next();
  });
};

app.get("/api/v1/user/bookings", gateman, async (req, res) => {
  const queryEmail = req.query.email;
  const tokenEmail = req.user.email;

  console.log("Querymail:", queryEmail);
  console.log("Token email:", tokenEmail); // issue 1

  if (queryEmail !== tokenEmail) {
    return res.status(403).send({ message: "forbidded access" });
  }

  // query ?email="joy@gmail.com"
  let query = {};

  if (queryEmail) {
    query.email = queryEmail;
  }

  const result = await bookingCollection.findOne(query);

  res.send(result);
});
