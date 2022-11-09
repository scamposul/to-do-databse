const handleError = ((error, req, res, next) => {
    const {status, errorContent} = error
    res.status(418).json({
      message: 'La cagaste, bro',
      error: errorContent.message
    })
  });

  module.exports = handleError;