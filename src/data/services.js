import { serviceList } from './serviceList.js'

// Text for the big scrolling strip between Projects and About.
// It is built from the `short` label of each service in serviceList.js.
export const services = serviceList.map((service) => service.short)
