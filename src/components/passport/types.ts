/**
 * @see https://core.telegram.org/passport/sdk-javascript#authbuttonoptions
 */
export interface AuthButtonOptions {
  /**
   * Text on the button.
   * @default "Log In With Telegram"
   */
  text?: string
  /**
   * Radius of the button and tooltip in px.
   * @default 23
   */
  radius?: number
  /**
   * Text on the tooltip.
   * @default "Please <u>install Telegram</u> to use this option."
   */
  tooltip_text?: string
  /**
   * Tooltip position.
   * @default "bottom"
   */
  tooltip_position?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * Always show a tooltip.
   * @default false
   */
  tooltip_force?: boolean
}

/**
 * @see https://core.telegram.org/passport/sdk-javascript#authparameters
 */
export interface AuthParameters {
  /**
   * Unique identifier for the bot.
   */
  bot_id: number
  /**
   * A JSON-serialized object describing the data you want to request
   */
  scope: PassportScope
  /**
   * Public key of your bot
   */
  public_key: string
  /**
   * Bot-specified nonce
   */
  nonce: string
  /**
   * URL to which the user will be redirected.
   */
  callback_url?: string
}

/**
 * This object represents the data to be requested.
 * @see https://core.telegram.org/passport#passportscope
 */
export interface PassportScope {
  /**
   * List of requested elements, each type may be used only once in the entire array of PassportScopeElement objects
   */
  data: PassportScopeElement[]
  /**
   * Scope version, must be 1
   */
  v: number
}

/**
 * This object represents a requested element, should be one of:
 *
 * PassportScopeElementOneOfSeveral - use to request any one of the documents included in the scope.
 * PassportScopeElementOne – use to request one particular document.
 * @see https://core.telegram.org/passport#passportscopeelement
 */
export interface PassportScopeElement {}

/**
 * This object represents one particular element that must be provided. If no options are needed, String can be used
 * instead of this object to specify the type of the element.
 * @see https://core.telegram.org/passport#passportscopeelementone
 */
export interface PassportScopeElementOne extends PassportScopeElement {
  /**
   * Element type.
   *
   * One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address",
   * "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration",
   * "phone_number", "email"
   */
  type: 'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration' | 'phone_number' | 'email'
  /**
   * Use this parameter if you want to request a selfie with the document as well.
   *
   * Available for "passport", "driver_license", "identity_card" and "internal_passport"
   */
  selfie?: boolean
  /**
   * Use this parameter if you want to request a translation of the document as well.
   *
   * Available for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement",
   * "rental_agreement", "passport_registration" and "temporary_registration".
   *
   * <i>Note: We suggest to only request translations after you have received a valid document that requires one.</i>
   */
  translation?: boolean
  /**
   * Use this parameter to request the first, last and middle name of the user in the language of the user's country
   * of residence.
   *
   * Available for "personal_details"
   */
  native_names?: boolean
}

/**
 * This object represents several elements one of which must be provided.
 * @see https://core.telegram.org/passport#passportscopeelementoneofseveral
 */
export interface PassportScopeElementOneOfSeveral extends PassportScopeElement {
  /**
   * List of elements one of which must be provided;
   * must contain either several of “passport”, “driver_license”, “identity_card”, “internal_passport”
   * <b>or</b> several of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
   */
  one_of: PassportScopeElementOne[]
  /**
   * Use this parameter if you want to request a selfie with the document from this list that the user chooses to upload.
   */
  selfie?: boolean
  /**
   * Use this parameter if you want to request a translation of the document from this list that the user chooses to upload.
   *
   * <i>Note: We suggest to only request translations after you have received a valid document that requires one.</i>
   */
  translation?: boolean
}
