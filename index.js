const getValue = value => (value instanceof RegExp ? value.source : value)

const regexmoji = ({ source, flags }, dictionary) => {
  Object.keys(dictionary).forEach(key => {
    let find = new RegExp(key, 'g')
    let replace = getValue(dictionary[key])
    source = source.replace(find, replace)
  })
  return new RegExp(source, flags)
}

const create = dictionary => regex => regexmoji(regex, dictionary)

module.exports = regexmoji
module.exports.rm = regexmoji
module.exports.create = create
