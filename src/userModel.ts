import mongoose from 'mongoose';

/**
 * The fields available in a User document instance.
 */
type User = {
  firstName: string;
  lastName: string;
  fullName: string;
  language: string;
}

type UserDocument = mongoose.Document & User;

type UserModel = mongoose.Model<UserDocument>;

const schema = new mongoose.Schema<UserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum: [`en`, `es`],
      required: true,
      default: `en`,
    },
  },
  {
    collection: `User`,
    timestamps: true,
  }
);

schema.virtual(`fullName`).get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});

export const userModel = mongoose.model<UserDocument, UserModel>(`User`, schema);
