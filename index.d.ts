/**
 * Manages the lifecycle and storage of various frameworks.
 */
class FrameworkManager {
  constructor()

  /**
   * Internal storage for registered frameworks.
   */
  frameworks: Record<string, any>

  /**
   * Manually adds a framework to the registry.
   */
  addFramework(name: string, framework: any): void

  /**
   * Lifecycle method to trigger preloading logic.
   */
  preloadFramework(name: string): string

  /**
   * Lifecycle method to trigger loading logic.
   */
  loadFramework(name: string): string

  /**
   * Lifecycle method to trigger post-loading logic.
   */
  postloadFramework(name: string): string

  /**
   * Retrieves a framework by its registered name.
   */
  getFramework(name: string): any

  /**
   * Removes a framework from the registry.
   */
  removeFramework(name: string): void

  /**
   * Registers and executes the full loading lifecycle for a framework.
   */
  useFramework(framework: any, name?: string): any

  /**
   * Requires a module from disk and registers it as a framework.
   */
  require(name: string): any
}

/**
 * The constructed instance of the FrameworkManager.
 */
const frameworkManager: FrameworkManager
export = frameworkManager
