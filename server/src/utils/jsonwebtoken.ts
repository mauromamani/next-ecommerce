import jwt from 'jsonwebtoken';

interface IToken {
  uid: string;
}

// generateJwt: generate a jwt given a uid
export const generateJwt = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED ?? 'SECRET_JWT_SEED',
      {
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Could not generate jsonwebtoken');
        }

        resolve(token);
      }
    );
  });
};

export const getUserId = (token: string) => {
  try {
    const secretSeed = process.env.SECRET_JWT_SEED || 'SECRET_JWT_SEED';

    const { uid } = jwt.verify(token, secretSeed) as IToken;

    return uid;
  } catch (error) {
    console.log(error);
    return null;
  }
};
