module.exports  =  { 
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Beer Artesanal",
            version: "1.0.0",
            description: "A simple express library API"
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/api`
            }
        ],
    },
    apis: ["./src/docs/*.yml"],
  } ;