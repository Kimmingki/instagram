export const getSignUp = (req, res) => res.send("회원가입");

export const postSignUp = (req, res) => res.redirect("/");

export const getLogin = (req, res) => res.send("로그인");

export const postLogin = (req, res) => res.redirect("/");
