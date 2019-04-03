const readLinkURL = (data) => {

  const regexLink = /(https?:\/\/[^\s]+)/g;
  const regexMatch = data.match(regexLink);
  console.log(regexMatch);

};

module.exports.readLinkURL = readLinkURL;
