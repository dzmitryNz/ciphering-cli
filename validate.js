function validate(config) {
  const chain = [];
  const splitedConfig = config.split('-');
  splitedConfig.map((el) => {
    if (el[0]) {
      if (!el[0].match(/C|R|A/)) process.exit(3);
      if (el[0].match(/C|R/) && !el[1].match(/1|0/)) process.exit(3);
    } else process.exit(1);
    chain.push(el);
    return 'done!';
  });

  return chain;
}

module.exports = validate;
