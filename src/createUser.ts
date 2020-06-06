import { userModel } from './userModel';

userModel.create({
  firstName: `Foo`,
  lastName: `Bar`,
}).then((user) => {
  console.log(`Created user ${user.fullName}`)
});
