import { Schema, model } from 'mongoose';

const OppotunitySchema = new Schema(
  {
    id: Number,
    title: String,
    value: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);

export default model('Opportunity', OppotunitySchema);
