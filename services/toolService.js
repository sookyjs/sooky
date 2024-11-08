import { BaseService } from "sooky-interfaces"

/**
 * Provides layer to manipulate tools.
 * @implements BaseService
 */
class ToolService extends BaseService {
  /** @param { toolModel: (ToolModel) } */
  constructor({ toolModel, eventBusService }) {
    super()

    /** @private @const {ToolModel} */
    this.toolModel_ = toolModel

    /** @private @const {EventBus} */
    this.eventBus_ = eventBusService
  }

  /**
   * @param {Object} selector - the query object for find
   * @return {Promise} the result of the find operation
   */
  list(selector) {
    return this.toolModel_.find(selector)
  }
}

export default ToolService
