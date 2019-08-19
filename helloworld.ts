// tslint:disable:no-console  Let's permit console.log for this test program.

function writeMessage(theMessage: string): string {
    console.log(theMessage)
    return theMessage
}

export default writeMessage

writeMessage("an inline test of writeMessage.")