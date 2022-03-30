interface auth {
  email: unknown;
  password: unknown;
  retypepassword: unknown;
}

export function validateAuth(param: auth) {
  switch (param.email) {
    case typeof param.email !== "string":
      return { email: "Email required" };
  }
}
