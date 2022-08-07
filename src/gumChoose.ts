import { execSync } from 'child_process'
import process from 'process'
export async function gumChoose() {
  const len = process.argv.length
  if (len < 3)
    throw new Error('You need to provide optional')
  const choices = len === 3 ? process.argv[2].replace(/["']/g, '').split(' ').join(' ') : process.argv.slice(2).join(' ')
  try {
    execSync(`gum choose ${choices}`, { stdio: 'inherit', killSignal: 'SIGTERM' })
  }
  catch (error: any) {
    if (error.status === 130)
      return // cancel
    throw error
  }
}

gumChoose()
