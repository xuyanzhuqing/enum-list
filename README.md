改造现有数组枚举，可通过 typescript 编译进行类型提示，增强数组枚举的可访问性

### 用法

```ts
import { Enum } from "enum-list"

export enum TaskState {
  TaskStateInit = 0,
  TaskStateStarted = 1,
  TaskStatePending = 2,
  TaskStateDone = 3,
  TaskStateFailed = 4,
  TaskStateCanceled = 5,
  TaskStateTerminated = 6,
  TaskStatePrepareRetry = 7,
  TaskStateRetried = 8
}

const taskStates = [
  { value: TaskState.TaskStateInit, zh_CN: '初始化', en_GB: 'init' },
  { value: TaskState.TaskStateStarted, zh_CN: '就绪', en_GB: 'started' },
  { value: TaskState.TaskStatePending, zh_CN: '等待中', en_GB: 'pending' },
  { value: TaskState.TaskStateDone, zh_CN: '已完成', en_GB: 'done', icon: 'CheckCircleOutlined', color: 'colorSuccess' },
  { value: TaskState.TaskStateFailed, zh_CN: '失败', en_GB: 'failed', icon: 'CloseCircleOutlined', color: 'colorError' },
  { value: TaskState.TaskStateCanceled, zh_CN: '已取消', en_GB: 'canceled' },
  { value: TaskState.TaskStateTerminated, zh_CN: '终止', en_GB: 'terminated' },
  { value: TaskState.TaskStatePrepareRetry, zh_CN: '准备重试', en_GB: 'retry' },
  { value: TaskState.TaskStateRetried, zh_CN: '已重试', en_GB: 'retried' },
] as const // as const 不可省略

export const TaskStateEnum = new Enum<TaskState, typeof taskStates>(taskStates)
```
---
### 测试效果
```ts
TaskStateEnum.value.get(TaskState.TaskStateInit)?.label // 初始化 or init（默认中文）
TaskStateEnum.value.get(TaskState.TaskStateInit)?.value // 0
TaskStateEnum.toJSON() // 可用于 select options
```

### tip
```
可通过设置 i18n 中英文切换，自动识别需要显示的中英文
```
