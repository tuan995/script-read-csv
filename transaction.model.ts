import { Schema, model } from "mongoose";
import { ITransaction } from "./type";

const TransactionSchema = new Schema<ITransaction>({
  transactionType: {
    type: String,
    enum: [
      "transaction-type-send",
      "transaction-type-card-receive",
      "transaction-type-inter-ledger",
      "transaction-type-card-reserve",
      "transaction-type-manual-credit",
      "transaction-type-outstanding-balance-repayment",
      "transaction-type-manual-debit",
      "transaction-type-inter-ledger-omnibus",
      "transaction-type-debit-payment-send",
      "transaction-type-receive",
      "transaction-type-virtual-debit-card-debit",
      "transaction-type-debit-send",
      "transaction-type-fx",
      "transaction-type-card-send",
    ],
    required: true,
  },
  transactionStatus: {
    type: String,
    required: true,
    enum: [
      "transaction-status-approved",
      "transaction-status-accepted",
      "transaction-status-declined",
      "transaction-status-pending",
      "transaction-status-reversed",
      "transaction-status-settled",
      "transaction-status-quarantine",
      "transaction-status-card-reservation-approved",
    ],
  },
  amount: { type: Number, required: true },
  debitCredit: { type: String },
  transactionId: { type: String, required: true },
  createdAt: { type: String, required: true },
  eventGroupCreatedAt: { type: String },
  assetType: { type: String, required: true },
  assetClass: { type: String, required: true },
  invoices: [],

  paymentType: { type: String },
  paymentInfo: { type: Object },
  ledgerToId: { type: String },
  ledgerFromId: { type: String },
  reference: { type: String },
  transactionInfo: {
    transactionId: { type: String },
    senderAgent: {
      bic: { type: String },
    },
    sender: {
      name: { type: String },
    },
    senderAccount: {
      accountNumber: { type: String },
    },
  },

  beneficiaryId: { type: String },

  originalTransactionId: { type: String },

  partnerProduct: { type: String },
  transactionPrintout: { type: Object },

  paymentCreditDate: { type: String },
  transactionMeta: {
    movement: { type: String },
    transactionType: { type: String },
    referenceTransactionId: { type: String },
    referenceTransactionType: { type: String },
    beneficiaryAccountId: { type: String },
    beneficiaryTransactionNumber: { type: String },
    purpose: { type: String },

    beneficiaryTransactionStatus: { type: String },
    creditDescription: { type: String },
    debitDescription: { type: String },
    correlationId: { type: String },
    paymentReference: { type: String },
    paymentType: { type: String },
    ledgerType: { type: String },
    ledgerAccountType: { type: String },

    costCenterCode: { type: String },
    campaignCode: { type: String },
    // for digital goods credit/debit
    transactionNumber: { type: String },
    hideFromApp: { type: Boolean },
  },

  cardCurrency: { type: String },
  transactionCurrency: { type: String },
  amountLocalCurrency: { type: Number },
  conversionRate: { type: Number },

  cardUsed: { type: String },
  merchantCategoryCode: { type: String },
  mccDescription: { type: String },
  merchantDetails: { type: String },
  declineReason: { type: String },
  declineReasonCode: { type: String },
});

export const Transaction =  model('transactions', TransactionSchema)