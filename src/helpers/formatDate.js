import { parseISO, format, add } from 'date-fns'

export function formatDate(origin, duration = 0) {
  const date = format(parseISO(origin), 'HH:mm')
  const finalDate = add(new Date(origin), { minutes: duration })
  const finalDateFormated = format(finalDate, 'HH:mm')
  return `${date} - ${finalDateFormated}`
}

export function formatDuration(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}мин`
}
