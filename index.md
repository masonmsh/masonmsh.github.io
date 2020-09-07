# Welcome
***

## Linux
#### 进程操作
**查看进程**
```
ps -aux
ps -ef
```
**杀死进程**
```
kill -9 pid
```
**断连继续运行**
```
nohup xxx >xxx.out 2>&1 &
```
#### 硬盘操作
**列举文件**
```
ls [-alht]
```
**占用空间**
```
du -sh --max-depth=1
```

## Python
#### 遍历字典
```python
a={'a': '1', 'b': '2', 'c': '3'}
### 遍历 key
# 法1
for key in a:
    print(key+':'+a[key])

# 法2
for key in a.keys():
    print(key+':'+a[key])

### 遍历 value
for value in a.values():
    print(value)

### 遍历 item
for kv in a.items():
    print(kv)

### 遍历 key value
for key,value in a.items():
    print(key+':'+value)

```
