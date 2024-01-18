const jwt = require('jsonwebtoken');
const  {getById}= require ('../users/user.service')
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }
console.log('authHeader',authHeader);
  const tokenParts = authHeader.split(' ');
  console.log('tokenParts',tokenParts);

  if (tokenParts.length !== 2 ) {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  const token = tokenParts[1]; // Extracting the token part after 'Bearer'


  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
    const user = await getById(decoded._id);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    // console.error('Token verification failed:', error); 
    return res.status(403).json({ error});
  }
};

module.exports = authenticateToken;
