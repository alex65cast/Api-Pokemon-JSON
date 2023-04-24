const CONF = {
    JWT_SECRET: process.env.JWT_SECRET,
    SALT_ROUND: Number(process.env.SALT_ROUND),
    ALLOW_OBOARDING: Boolean(process.env.ALLOW_OBOARDING),
    CONECT_DB: process.env.CONECT_DB!
}

export default CONF;