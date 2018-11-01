const req = require.context('../../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\/(.*)\.svg/

const allIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})

const menuIcons = allIcons.filter(k => ~k.indexOf('menu_'))
const alarmIcons = allIcons.filter(k => ~k.indexOf('alarm_level')).reverse()
const severityIcons = allIcons.filter(k => ~k.indexOf('severity_')).reverse()
const icons = allIcons.filter(
  k => !(~k.indexOf('menu_') || ~k.indexOf('alarm_level') || ~k.indexOf('severity_'))
)

export { menuIcons, alarmIcons, severityIcons, icons }
