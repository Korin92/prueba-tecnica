export const parseCookie = (cookieStr: string): { [key: string]: any } => {
    const initValue = {}
  
    return cookieStr
      .split(';')
      .map((value) => value.split('='))
      .reduce((acc, cur) => {
        if (cur.length < 2) {
          return acc
        }
        const key = cur[0].trim()
        const value = cur[1].trim()
  
        const keyDecoded = decodeURIComponent(key)
        const valueDecoed = decodeURIComponent(value)
  
        return {
          ...acc,
          [keyDecoded]: valueDecoed,
        }
      }, initValue)
  }