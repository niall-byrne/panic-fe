import assets from "./assets";

export const Strings = {
  en: {
    MainTitle: "Panic",
    SignIn: {
      Title: "Sign In",
      LoginMessageGoogle: "Login With Google",
      LoginMessageFacebook: "Login With Facebook",
      ErrorLoginFailure: "Unable to authenticate!\nPlease try again.",
      ErrorAuthExpired: "Authentication Expired!\nPlease login again.",
      ErrorDuplicateAccount:
        "You have already signed up!\nTry logging in with another social account.",
      PendingSocialConnection: "Connecting . . .",
    },
    ErrorDialogue: {
      ErrorDialogueConfirm: "OK",
      ErrorDialogueTitle: "Error!",
    },
    Copyight: {
      CopyrightDeclaration: "Copyright © ",
      CopyrightMessage: "Your Website",
    },
    App: {
      Suspense: "Suspense filled message...",
    },
    CookiePolicy: {
      CookieMessage:
        "This website would like to use cookies to measure how you as an individual interact with it.  We'll use this information to improve the service.",
      CookieAcceptText: "I'm ok with that",
      CookieDeclineText: "I Decline",
    },
    MainMenu: {
      Title: "Main Menu",
      HeaderTitle: "Panic: Main Menu",
      HelpText: "Make a selection to proceed.",
    },
    CreateItem: {
      Title: "Create New Item",
      HeaderTitle: "Create",
      HelpText:
        "Fill out the values, click the save button to finalize.\nDon't modify quantity here.",
    },
    ItemDetails: {
      Title: "Edit Item Details",
      HeaderTitle: "Details",
      HelpText:
        "Fill out the values, click the save button to finalize.\nDon't modify quantity here.",
      NameLabel: "Name",
      QuantityLabel: "#",
      PriceLabel: "$",
      StoresLabel: "Stores",
      SaveButton: `${assets.nonBreakingSpace}Save${assets.nonBreakingSpace}`,
      DeleteButton: "Delete",
      MultiSelectHelp: "",
      ShelvesDetail: "Where do you keep this at home?",
      ShelfLifeDetail: "How long does this item typically keep?",
      PerferredLocationDetails: "Where do you prefer to buy this?",
      ErrorUnselectedStore: "Choose a preferred stored.",
      ErrorExistingItem: "Another item has this name.",
      SaveAction: "Saved",
      DeleteAction: "Deleting ... :(",
      Tabs: {
        Edit: "Edit",
        Stats: "Stats",
      },
      NeedShelvesAndStores:
        "Create some shelves and stores first!\nYour items need to have stores you prefer\n to shop at, and a place to be kept at home.",
      ApiCommunicationError:
        "Something went wrong!\nMaybe this doesn't exist? Or it already exists, and you're creating it again?\nGive it another try before giving up.",
      ApiError:
        "Unable to retrieve data from the API!\nDoes this content really exist?\nRetry, or change your query.",
    },
    ItemStats: {
      Title: "Consumption Statistics",
      HeaderTitle: "Details",
      HelpText: "Here is some help.",
      RecommendExpiredItems: "Expired Items Warning",
      RecommendExpiringSoon: "Item(s) Expiring Soon",
      ConsumptionCurrentInventory: "current inventory",
      ConsumptionConsumedLastWeek: "last week",
      ConsumptionConsumedLastMonth: "last month",
      ConsumptionAvgWeek: "avg. per week",
      ConsumptionAvgMonth: "avg. per month",
      NotEnoughData: "Not Enough Data",
    },
    ItemList: {
      ApiError:
        "Unable to retrieve data from the API!\nDoes this content really exist?\nRetry, or change your query.",
    },
    InventoryPage: {
      Title: "Inventory (All)",
      HeaderTitle: "Inventory",
      HelpText:
        "Click and hold the item's name for details.\nUse the create button (upper right) to add new items.\nIncrese or decrease quantity with the buttons.",
      Save: "save",
      Delete: "delete",
      PlaceHolderMessage: "You have no items yet.",
      ErrorInsufficientInventory: "You don't have that many.",
      Quantity: {
        Title: "Quantity",
        Message: "This is how many items you have in stock.",
      },
      Expired: {
        Title: "Expired",
        Message:
          "This is how many items you have in stock that may be expired.",
      },
    },
    SimpleList: {
      ValidationAlreadyExists: "This already exists",
      ValidationFailure: "Enter a valid name",
      SaveButton: "save",
      DeleteButton: "delete",
      CreatedAction: "Created",
      DeletedAction: "Deleted",
    },
    ShelfPage: {
      Title: "Your Shelves",
      HeaderTitle: "Shelves",
      PlaceHolderMessage: "You Have No Shelves Yet.",
      HelpText:
        "Click a shelf to select, click and hold to delete.\nUse the create button (upper right) to add new shelves.",
    },
    StorePage: {
      Title: "Your Stores",
      HeaderTitle: "Stores",
      PlaceHolderMessage: "You Have No Stores Yet.",
      HelpText:
        "Click a store to select, click and hold to delete.\nUse the create button (upper right) to add new stores.",
    },
    Testing: {
      GenericTranslationTestString: "GenericTranslationTestString",
      GenericMultiLineTranslationTestString:
        "GenericTranslationTestString\nGenericTranslationTestString",
    },
    PlaceHolder: {
      PlaceHolderMessage: "I'm only a placeholder.",
    },
  },
};

// Export english as default for matching during tests
export default Strings.en;
