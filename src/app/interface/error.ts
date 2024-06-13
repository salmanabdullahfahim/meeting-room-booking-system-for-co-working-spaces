export type TErrorMessages = {
  path: number | string;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TErrorMessages;
};
