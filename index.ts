export interface EnumItem {
  value: number | string;
  label: string;
  [x: string]: any;
}

export default abstract class Enum {
  public static states: readonly EnumItem[]

  public static get value (): EnumFn<typeof Enum, 'value'> {
    const res: any = {}
    this.states.forEach(v => {
      res[v.value] = v
    })
    return res
  }

  public static get label (): EnumFn<typeof Enum, 'label'> {
    const res: any = {}
    this.states.forEach(v => {
      res[v.label] = v
    })
    return res
  }
}

export type EnumFn<S extends typeof Enum, K extends keyof EnumItem> = Record<S['states'][number][K], EnumItem>;