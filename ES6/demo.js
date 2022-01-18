const zhuawa = {
  teacher: {
    name: '云隐',
    age: 30
  },
  leader: '黄小杨',
  name: 'es6'
}

const { teacher: {
  name, age
}, leader, name: className
} = zhuawa