import { ColorText, Colors, light, bold, background } from "./main"

function showcase() {
	const TRANSPARENT_BACKGROUND_COLOR: string = "\033[1;31;49m"
	const lightColomnMessageStruct = TRANSPARENT_BACKGROUND_COLOR + "|" + light.white + "white" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.ciano + "ciano" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.purple + "purple" + TRANSPARENT_BACKGROUND_COLOR + ": " +light.blue + "blue" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.yellow + "yellow" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.green + "green" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.red + "red" + TRANSPARENT_BACKGROUND_COLOR + ": " + light.grey + TRANSPARENT_BACKGROUND_COLOR + "|"
	const boldColomnMessageStruct = TRANSPARENT_BACKGROUND_COLOR + "|" + bold.white + "white" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.ciano + "ciano" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.purple + "purple" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.blue + "blue" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.yellow + "yellow" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.green + "green" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.red + "red" + TRANSPARENT_BACKGROUND_COLOR + ": " + bold.grey + TRANSPARENT_BACKGROUND_COLOR + "|"
	const backgroundColomnMessageStruct = TRANSPARENT_BACKGROUND_COLOR + "|" + background.white + "white" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.ciano + "ciano" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.purple + "purple" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.blue + "blue" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.yellow + "yellow" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.green + "green" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.red + "red" + TRANSPARENT_BACKGROUND_COLOR + ": " + background.grey + TRANSPARENT_BACKGROUND_COLOR + "|"

	const   lightcolorshowcase = {
		outputColorColumn: console.log(
			lightColomnMessageStruct + "\n" + 
			boldColomnMessageStruct + "\n" + 
			backgroundColomnMessageStruct 
		)
	}
}


showcase()
