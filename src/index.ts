/**
 * This is a example of JSDoc comment
 *
 * @param name string name of the
 */
const hello = (name: string): void => {
  console.log(`Hello, ${name}`)
}

// All comments should be removed in the build version
hello('World!')
