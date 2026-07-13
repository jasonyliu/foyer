import { formatUpdated } from './lib/format'

const updated = document.querySelector<HTMLElement>('#updated')
if (updated) {
  updated.textContent = `Last updated ${formatUpdated(new Date(document.lastModified), new Date())}`
}
