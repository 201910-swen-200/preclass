import writeMessage from "./helloworld"

const testMessage: string = 'hello'

describe('TestHello', () => {

  it('write message returns the message', () => {
    expect(writeMessage(testMessage)).toEqual(testMessage)
  })
})
