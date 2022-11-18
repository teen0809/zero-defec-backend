declare const _default: (() => {
    s3Bucket: string;
    awsId: string;
    awsSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    s3Bucket: string;
    awsId: string;
    awsSecret: string;
}>;
export default _default;
