export type ITransaction = {
    transactionType: TransactionTypes;
    transactionStatus: TransactionStatuses;
    amount: number;
    debitCredit: string;
    transactionId: string;
    createdAt: string;
    eventGroupCreatedAt?: string;
    assetType: string;
    assetClass: string;
    invoices: [];
  
    paymentType?: string;
    paymentInfo?: object;
    ledgerToId?: string;
    ledgerFromId?: string;
    reference?: string;
    transactionInfo?: {
      transactionId?: string;
      senderAgent?: {
        bic?: string;
      };
      sender?: {
        name?: string;
      };
      senderAccount?: {
        accountNumber?: string;
      };
    };
  
    beneficiaryId?: string;
  
    originalTransactionId?: string;
  
    partnerProduct?: string;
    transactionPrintout?: object;
  
    paymentCreditDate?: string;
    transactionMeta?: TransactionMeta;
  
    cardCurrency?: string;
    transactionCurrency?: string;
    amountLocalCurrency?: number;
    conversionRate?: number;
  
    cardUsed?: string;
    merchantCategoryCode?: string;
    mccDescription?: string;
    merchantDetails?: string;
    declineReason?: string;
    declineReasonCode?: string;
  };
  
  export enum TransactionTypes {
    RECEIVE = 'transaction-type-receive',
    SEND = 'transaction-type-send',
    INTER_LEDGER = 'transaction-type-inter-ledger',
    INTER_LEDGER_OMNIBUS = 'transaction-type-inter-ledger-omnibus',
    DEBIT_CARD_DEBIT = 'transaction-type-virtual-debit-card-debit',
    DEBIT_CARD_CREDIT = 'transaction-type-card-receive',
    DEBIT_CARD_REVERSED = 'transaction-type-card-reversed',
    MANUAL_CREDIT = 'transaction-type-manual-credit',
    MANUAL_DEBIT = 'transaction-type-manual-debit',
    CARD_RESERVE = 'transaction-type-card-reserve',
    CARD_DEBIT = 'transaction-type-card-send',
  }
  
  export enum TransactionStatuses {
    APPROVED = 'transaction-status-approved',
    ACCEPTED = 'transaction-status-accepted',
    DECLINED = 'transaction-status-declined',
    PENDING = 'transaction-status-pending',
    REVERSED = 'transaction-status-reversed',
    SETTLED = 'transaction-status-settled',
    QUARANTINE = 'transaction-status-quarantine',
    RESERVATION_APPROVED = 'transaction-status-card-reservation-approved',
  }
  
  export type TransactionMeta = {
    movement?: string;
    transactionType?: string;
    referenceTransactionId?: string;
    referenceTransactionType?: string;
    beneficiaryAccountId?: string;
    beneficiaryTransactionNumber?: string;
    purpose?: string;
  
    beneficiaryTransactionStatus?: string;
    creditDescription?: string;
    debitDescription?: string;
    correlationId?: string;
    paymentReference?: string;
    paymentType?: string;
    ledgerType?: string;
    ledgerAccountType?: string;
  
    costCenterCode?: string;
    campaignCode?: string;
    // for digital goods credit/debit
    transactionNumber?: string;
    hideFromApp?: boolean;
  };
  
  export type PaginationParams = {
    itemsPerPage?: number;
    offset?: number;
    order?: string;
    startingAtDate?: string;
    lastSeenId?: string;
    fromDate?: string;
    toDate?: string;
    ledgerId?: string;
  };
  