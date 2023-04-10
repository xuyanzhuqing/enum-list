import Enum, { EnumFn } from '../index'

export enum IsoState {
  init = 0x01,
  check = 0x02,
  uploading = 0x03,
  failure = 0x04,
  finish = 0x05,
  delete = 0x06,
  notexist = 0x07,
  attached = 0x08
}

export class IsoStateEnum extends Enum {
  public static states = [
    { value: IsoState.init /* 也可以自定义 */, label: '初始', desc: 'sss' },
    { value: IsoState.check, label: '检测中' },
    { value: IsoState.uploading, label: '上传中' },
    { value: IsoState.failure, label: '失败' },
    { value: IsoState.finish, label: '已完成' },
    { value: IsoState.delete, label: '删除中' },
    { value: IsoState.notexist, label: '已删除' },
    { value: IsoState.attached, label: '已挂载' }
  ] as const // 关键所在

  public static value: EnumFn<typeof IsoStateEnum, 'value'>
  public static label: EnumFn<typeof IsoStateEnum, 'label'>
}

// 测试
console.info(IsoStateEnum.label.上传中.label) // 3
console.info(IsoStateEnum.value[IsoState.attached].label) // 已挂载
console.info(IsoStateEnum.value[1].label) // 初始