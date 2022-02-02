const execSync = require('child_process').execSync

interface Colors {
    grey: string,
    red: string,
    green: string,
    yellow: string,
    blue: string,
    purple: string,
    ciano : string,
    white: string
    orange: string
}

const light: Colors = {
    grey: "\033[0;30m",
    red: "\033[0;31m",
    green: "\033[0;32m", 
    yellow: "\033[0;33m", 
    blue: "\033[0;34m",
    purple: "\033[0;35m", 
    ciano: "\033[0;36m",
    white: "\033[0;37m",
    orange: "\u001b[0;5;208m"
}

const bold: Colors = {
    grey: "\033[1;30m",
    red: "\033[1;31m",
    green: "\033[1;32m",
    yellow: "\033[1;33m",
    blue: "\033[1;34m",
    purple: "\033[1;35m",
    ciano: "\033[1;36m",
    white: "\033[1;37m",
    orange: "\u001b[38;5;208m"
}

const background: Colors = {
    grey: "\033[40m",
    red: "\033[41m",
    green: "\033[42m",
    // yellow: "\033[43m", this is the propper bg color
    yellow: "\033[103m",
    blue: "\033[44m",
    purple: "\033[45m",
    ciano: "\033[46m",
    white: "\033[47m",
    orange: "\033[48;2;255;165;0m"
}

// Happy colouring!
class ColorText {
    WINDOWWIDTH = execSync("tput cols", {encoding: 'utf8'})
    WINDOWHEIGHT = execSync("tput lines", {encoding: 'utf8'})
    TRANSPARENT_BACKGROUND_COLOR: string = "\033[1;31;49m"

    messageParameter: string = "Example msg"
    colorParameter: string = light.blue
    backgroundParameter: string = this.TRANSPARENT_BACKGROUND_COLOR

    showcase(){
	    return ""
    }
    output(messageParameter: string, colorParameter: string, backgroundParameter: string){
	    this.messageParameter = messageParameter
	    this.colorParameter = colorParameter
	    this.backgroundParameter = backgroundParameter
	    const OUTPUT_MESSAGE_PATTERN = this.colorParameter + this.backgroundParameter + this.messageParameter + this.TRANSPARENT_BACKGROUND_COLOR
	    return console.log(OUTPUT_MESSAGE_PATTERN)
    }
    textAlign(messageParameter: string, colorParameter: string, backgroundParameter: string){
	    this.messageParameter = messageParameter
	    this.colorParameter = colorParameter
	    this.backgroundParameter = backgroundParameter
	    const TABULATION = " "
	    const TABULATEDMESSAGE = TABULATION.repeat((this.WINDOWWIDTH / 2) - (messageParameter.length / 2))
	    const ALIGN_MESSAGE_PATTERN: string = this.colorParameter + this.backgroundParameter + TABULATEDMESSAGE  + messageParameter + TABULATEDMESSAGE + this.TRANSPARENT_BACKGROUND_COLOR
	    return console.log(ALIGN_MESSAGE_PATTERN)
    }
    textAlignRight(messageParameter: string, colorParameter: string, backgroundParameter: string){
	    this.messageParameter = messageParameter
	    this.colorParameter = colorParameter
	    this.backgroundParameter = backgroundParameter
	    const TABULATION = " "
	    const TABULATEDMESSAGE = TABULATION.repeat(this.WINDOWWIDTH - messageParameter.length)
	    const ALIGN_MESSAGE_PATTERN: string = this.colorParameter + this.backgroundParameter + TABULATEDMESSAGE  + messageParameter + this.TRANSPARENT_BACKGROUND_COLOR
	    return console.log(ALIGN_MESSAGE_PATTERN)
    }
}

export { 
	ColorText,
	light,
	bold,
	background,
	Colors
}
