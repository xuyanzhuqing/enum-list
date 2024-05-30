// https://www.npmjs.com/package/enum-list?activeTab=readme

export interface EnumItem<T> {
  value: T;
  zh_CN: string;
  en_GB: string;
  label?: string;
  [x: string]: any;
}

export class Enum<T, S extends readonly EnumItem<T>[]> {
  private states: S
  constructor(states: S) {
    this.states = states
  }

  get lng() {
    return localStorage.getItem('i18nextLng') || 'zh_CN'
  }

  get value(): Map<T, EnumItem<T>> {
    const res = new Map<T, EnumItem<T>>()
    const lng = this.lng

    this.states.forEach(v => {
      v.label = v[lng]
      res.set(v.value, v)
    })
    return res
  }

  toJSON() {
    const lng = this.lng

    return this.states.map(s => {
      return {
        ...s,
        label: s[lng]
      }
    })
  }

  toValueEnum() {
    return this.toJSON().reduce((acc, curr) => {
      acc[curr.value] = {
        text: curr.label
      }
      return acc
    }, {} as any)
  }
}
