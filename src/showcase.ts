import { ColorText, Colors, light, bold, background } from "./main"

export class Showcase {
	TRANSPARENT_BACKGROUND_COLOR: string = "\033[1;31;49m"
	lightColomnMessageStruct = this.TRANSPARENT_BACKGROUND_COLOR + "|" + light.white + "white" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.ciano + "ciano" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.purple + "purple" + this.TRANSPARENT_BACKGROUND_COLOR + ": " +light.blue + "blue" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.yellow + "yellow" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.green + "green" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.red + "red" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + light.grey + this.TRANSPARENT_BACKGROUND_COLOR + "|"
	boldColomnMessageStruct = this.TRANSPARENT_BACKGROUND_COLOR + "|" + bold.white + "white" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.ciano + "ciano" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.purple + "purple" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.blue + "blue" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.yellow + "yellow" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.green + "green" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.red + "red" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + bold.grey + this.TRANSPARENT_BACKGROUND_COLOR + "|"
	backgroundColomnMessageStruct = this.TRANSPARENT_BACKGROUND_COLOR + "|" + background.white + "white" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.ciano + "ciano" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.purple + "purple" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.blue + "blue" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.yellow + "yellow" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.green + "green" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.red + "red" + this.TRANSPARENT_BACKGROUND_COLOR + ": " + background.grey + this.TRANSPARENT_BACKGROUND_COLOR + "|"

	lightcolorshowcase = {
		outputColorColumn: console.log(
			this.lightColomnMessageStruct + "\n" + 
			this.boldColomnMessageStruct + "\n" + 
			this.backgroundColomnMessageStruct 
		)
	}
}

