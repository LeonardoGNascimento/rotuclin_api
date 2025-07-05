import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { session, withAuth } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "mysql",
      url: "mysql://root:password@localhost:3306/rotuclin",
      prismaSchemaPath: "./schema.prisma",
    },
    storage: {
      my_S3_images: {
        kind: "s3",
        type: "image",
        bucketName: "public",
        region: "us-east-1",
        accessKeyId: "minioadmin",
        secretAccessKey: "wo6623kbarrpkqnf",
        signed: { expiry: 5000 },
        endpoint: "http://rotuclin-minio-bf124c-69-62-86-212.traefik.me:9000",
        forcePathStyle: true,
      },
    },
    lists,
    session,
  })
);
