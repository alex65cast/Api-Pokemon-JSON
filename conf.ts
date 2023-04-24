const CONF = {
    JWT_SECRET: process.env.JWT_SECRET,
    SALT_ROUND: Number(process.env.SALT_ROUND),
    CONECT_DB: process.env.CONECT_DB!,
    PORT: Number(process.env.PORT)
}

export default CONF;