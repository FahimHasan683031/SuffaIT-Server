/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser} from './user.interface';
const userSchema = new Schema<TUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    }  
  },
  {
    timestamps: true,
  },
);



export const User = model<TUser>('User', userSchema);
