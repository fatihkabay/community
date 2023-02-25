import * as bcryt from "bcrypt";

export function enCodePassword (rawPassword: string) {
    const SALT = bcryt.genSaltSync();
    return bcryt.hashSync(rawPassword, SALT);
}