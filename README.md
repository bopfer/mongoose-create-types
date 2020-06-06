# mongoose-create-types

This repo is to show the error I am seeing with Mongoose `create` calls and `@types/mongoose` v5.7.22.

The "user" model created here is a simplified version of the one in my actual code base.

It looks like the main issue with `create` (for me anyway) is related to virtual fields and fields that are required, but have a default value, which means they don't need to be specified in `create`.

It's very possible I am going something wrong with my Mongoose and/or type definitions for my Mongoose models.  But, I am using the same setup I see in many other places.

To see the error:

1. Clone this repo.
2. Run `yarn install`
3. Run `yarn type-check`

This error then show:

```
src/createUser.ts:3:18 - error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '{ firstName: string; lastName: string; }' is not assignable to parameter of type 'Pick<{ _id: any; fullName: string; firstName: string; lastName: string; language: string; } & { _id: any; }, "fullName" | "firstName" | "lastName" | "language"> & { _id?: any; }'.
      Type '{ firstName: string; lastName: string; }' is missing the following properties from type 'Pick<{ _id: any; fullName: string; firstName: string; lastName: string; language: string; } & { _id: any; }, "fullName" | "firstName" | "lastName" | "language">': fullName, language

  node_modules/@types/mongoose/index.d.ts:3235:5
    3235     create<TCreate = T>(...docs: CreateQuery<TCreate>[]): Promise<T>;
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    The last overload is declared here.
```
