export default function transfersString(transfersNumbers) {
  let string = 'пересадок'
  if (transfersNumbers === 1) {
    string = 'пересадка'
  } else if (transfersNumbers === 2 || transfersNumbers === 3 || transfersNumbers === 4) {
    string = 'пересадки'
  }
  return `${transfersNumbers} ${string}`
}
