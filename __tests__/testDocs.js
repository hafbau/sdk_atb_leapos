module.exports = [
  {
    operation_id: 'OBPv3.1.0-getAccountApplication',
    implemented_by: {
      version: 'OBPv3.1.0',
      'function': 'getAccountApplication'
    },
    request_verb: 'GET',
    request_url: '/obp/v3.1.0/banks/BANK_ID/account-applications/ACCOUNT_APPLICATION_ID',
    summary: 'Get Account Application by Id',
    description: '<p>Get the Account Application.</p>\n<p>Authentication is Mandatory</p>\n',
    description_markdown: 'Get the Account Application.\n\n\nAuthentication is Mandatory\n\n',
    example_request_body: {
      jsonString: '{}'
    },
    success_response_body: {
      account_application_id: 'gc23a7e2-7dd2-4bdf-a0b4-ae31232a4763',
      product_code: 'saveing1',
      user: {
        user_id: '9ca9a7e4-6d02-40e3-a129-0b2bf89de9b1',
        email: 'eveline@example.com',
        provider_id: 'Chris',
        provider: 'http://127.0.0.1:8080',
        username: 'felixsmith'
      },
      customer: {
        bank_id: 'GENODEM1GLS',
        customer_id: '7uy8a7e4-6d02-40e3-a129-0b2bf89de8uh',
        customer_number: '5987953',
        legal_name: 'Eveline Tripman',
        mobile_phone_number: '+44 07972 444 876',
        email: 'eveline@example.com',
        face_image: {
          url: 'www.openbankproject',
          date: '2017-09-19T00:00:00Z'
        },
        date_of_birth: '2017-09-19T00:00:00Z',
        relationship_status: 'single',
        dependants: 10,
        dob_of_dependants: [
          '2017-09-19T00:00:00Z'
        ],
        credit_rating: {
          rating: 'OBP',
          source: 'OBP'
        },
        credit_limit: {
          currency: 'EUR',
          amount: '10'
        },
        highest_education_attained: 'Master',
        employment_status: 'worker',
        kyc_status: true,
        last_ok_date: '2017-09-19T00:00:00Z',
        title: 'Dr.',
        branchId: 'DERBY6',
        nameSuffix: 'Sr'
      },
      date_of_application: '2017-09-19T00:00:00Z',
      status: 'REQUESTED'
    },
    error_response_bodies: [
      'OBP-20001: User not logged in. Authentication is required!',
      'OBP-20006: User is missing one or more roles: ',
      'OBP-50000: Unknown Error.'
    ],
    is_core: false,
    is_psd2: false,
    is_obwg: false,
    tags: [
      'Account-Application',
      'Account',
      'New-Style'
    ],
    typed_request_body: {
      type: 'object',
      properties: {
        jsonString: {
          type: 'string'
        }
      }
    },
    typed_success_response_body: {
      type: 'object',
      properties: {
        product_code: {
          type: 'string'
        },
        status: {
          type: 'string'
        },
        user: {
          type: 'object',
          properties: {
            provider: {
              type: 'string'
            },
            email: {
              type: 'string'
            },
            provider_id: {
              type: 'string'
            },
            username: {
              type: 'string'
            },
            user_id: {
              type: 'string'
            }
          }
        },
        customer: {
          type: 'object',
          properties: {
            bank_id: {
              type: 'string'
            },
            nameSuffix: {
              type: 'string'
            },
            email: {
              type: 'string'
            },
            employment_status: {
              type: 'string'
            },
            last_ok_date: {
              type: 'string',
              format: 'date-time'
            },
            customer_id: {
              type: 'string'
            },
            relationship_status: {
              type: 'string'
            },
            date_of_birth: {
              type: 'string',
              format: 'date-time'
            },
            dob_of_dependants: {
              type: 'array',
              items: {
                type: 'string',
                format: 'date-time'
              }
            },
            highest_education_attained: {
              type: 'string'
            },
            customer_number: {
              type: 'string'
            },
            credit_rating: {
              type: 'object',
              properties: {
                source: {
                  type: 'string'
                },
                rating: {
                  type: 'string'
                }
              }
            },
            credit_limit: {
              type: 'object',
              properties: {
                amount: {
                  type: 'string'
                },
                currency: {
                  type: 'string'
                }
              }
            },
            branchId: {
              type: 'string'
            },
            face_image: {
              type: 'object',
              properties: {
                date: {
                  type: 'string',
                  format: 'date-time'
                },
                url: {
                  type: 'string'
                }
              }
            },
            dependants: {
              type: 'integer'
            },
            legal_name: {
              type: 'string'
            },
            title: {
              type: 'string'
            },
            mobile_phone_number: {
              type: 'string'
            },
            kyc_status: {
              type: 'boolean'
            }
          }
        },
        account_application_id: {
          type: 'string'
        },
        date_of_application: {
          type: 'string',
          format: 'date-time'
        }
      }
    },
    is_featured: false,
    special_instructions: '',
    specified_url: '/obp/v4.0.0/banks/BANK_ID/account-applications/ACCOUNT_APPLICATION_ID'
  },
  {
    operation_id: 'OBPv1.2.1-deleteCounterpartyImageUrl',
    implemented_by: {
      version: 'OBPv1.2.1',
      'function': 'deleteCounterpartyImageUrl'
    },
    request_verb: 'DELETE',
    request_url: '/obp/v1.2.1/banks/BANK_ID/accounts/ACCOUNT_ID/VIEW_ID/other_accounts/OTHER_ACCOUNT_ID/metadata/image_url',
    summary: 'Delete Counterparty Image URL',
    description: '<p>Delete image url of other bank account.</p>\n',
    description_markdown: 'Delete image url of other bank account.',
    example_request_body: {
      jsonString: '{}'
    },
    success_response_body: {
      jsonString: '{}'
    },
    error_response_bodies: [
      'OBP-50000: Unknown Error.'
    ],
    is_core: false,
    is_psd2: false,
    is_obwg: false,
    tags: [
      'Counterparty-Metadata',
      'Counterparty'
    ],
    typed_request_body: {
      type: 'object',
      properties: {
        jsonString: {
          type: 'string'
        }
      }
    },
    typed_success_response_body: {
      type: 'object',
      properties: {
        jsonString: {
          type: 'string'
        }
      }
    },
    is_featured: false,
    special_instructions: '',
    specified_url: '/obp/v4.0.0/banks/BANK_ID/accounts/ACCOUNT_ID/VIEW_ID/other_accounts/OTHER_ACCOUNT_ID/metadata/image_url'
  },
  {
    operation_id: 'OBPv3.1.0-updateSystemView',
    implemented_by: {
      version: 'OBPv3.1.0',
      'function': 'updateSystemView'
    },
    request_verb: 'PUT',
    request_url: '/obp/v3.1.0/system-views/VIEW_ID',
    summary: 'Update System View.',
    description: '<p>Update an existing view on a bank account</p>\n<p>Authentication is Mandatory and the user needs to have access to the owner view.</p>\n<p>The json sent is the same as during view creation (above), with one difference: the \'name\' field<br />\nof a view is not editable (it is only set when a view is created)</p>\n',
    description_markdown: 'Update an existing view on a bank account\n\nAuthentication is Mandatory and the user needs to have access to the owner view.\n\nThe json sent is the same as during view creation (above), with one difference: the \'name\' field\nof a view is not editable (it is only set when a view is created)',
    example_request_body: {
      description: 'this is for family',
      metadata_view: 'owner',
      is_public: true,
      which_alias_to_use: 'family',
      hide_metadata_if_alias_used: true,
      allowed_actions: [
        'can_see_transaction_this_bank_account',
        'can_see_transaction_other_bank_account',
        'can_see_transaction_metadata',
        'can_see_transaction_label',
        'can_see_transaction_amount',
        'can_see_transaction_type',
        'can_see_transaction_currency',
        'can_see_transaction_start_date',
        'can_see_transaction_finish_date',
        'can_see_transaction_balance',
        'can_see_comments',
        'can_see_narrative',
        'can_see_tags',
        'can_see_images',
        'can_see_bank_account_owners',
        'can_see_bank_account_type',
        'can_see_bank_account_balance',
        'can_see_bank_account_currency',
        'can_see_bank_account_label',
        'can_see_bank_account_national_identifier',
        'can_see_bank_account_swift_bic',
        'can_see_bank_account_iban',
        'can_see_bank_account_number',
        'can_see_bank_account_bank_name',
        'can_see_other_account_national_identifier',
        'can_see_other_account_swift_bic',
        'can_see_other_account_iban',
        'can_see_other_account_bank_name',
        'can_see_other_account_number',
        'can_see_other_account_metadata',
        'can_see_other_account_kind',
        'can_see_more_info',
        'can_see_url',
        'can_see_image_url',
        'can_see_open_corporates_url',
        'can_see_corporate_location',
        'can_see_physical_location',
        'can_see_public_alias',
        'can_see_private_alias',
        'can_add_more_info',
        'can_add_url',
        'can_add_image_url',
        'can_add_open_corporates_url',
        'can_add_corporate_location',
        'can_add_physical_location',
        'can_add_public_alias',
        'can_add_private_alias',
        'can_delete_corporate_location',
        'can_delete_physical_location',
        'can_edit_narrative',
        'can_add_comment',
        'can_delete_comment',
        'can_add_tag',
        'can_delete_tag',
        'can_add_image',
        'can_delete_image',
        'can_add_where_tag',
        'can_see_where_tag',
        'can_delete_where_tag',
        'can_create_counterparty',
        'can_see_bank_routing_scheme',
        'can_see_bank_routing_address',
        'can_see_bank_account_routing_scheme',
        'can_see_bank_account_routing_address',
        'can_see_other_bank_routing_scheme',
        'can_see_other_bank_routing_address',
        'can_see_other_account_routing_scheme',
        'can_see_other_account_routing_address',
        'can_query_available_funds'
      ]
    },
    success_response_body: {
      id: '1234',
      short_name: 'short_name',
      description: 'description',
      metadata_view: 'owner',
      is_public: true,
      alias: 'No',
      hide_metadata_if_alias_used: true,
      can_add_comment: true,
      can_add_corporate_location: true,
      can_add_image: true,
      can_add_image_url: true,
      can_add_more_info: true,
      can_add_open_corporates_url: true,
      can_add_physical_location: true,
      can_add_private_alias: true,
      can_add_public_alias: true,
      can_add_tag: true,
      can_add_url: true,
      can_add_where_tag: true,
      can_delete_comment: true,
      can_add_counterparty: true,
      can_delete_corporate_location: true,
      can_delete_image: true,
      can_delete_physical_location: true,
      can_delete_tag: true,
      can_delete_where_tag: true,
      can_edit_owner_comment: true,
      can_see_bank_account_balance: true,
      can_query_available_funds: true,
      can_see_bank_account_bank_name: true,
      can_see_bank_account_currency: true,
      can_see_bank_account_iban: true,
      can_see_bank_account_label: true,
      can_see_bank_account_national_identifier: true,
      can_see_bank_account_number: true,
      can_see_bank_account_owners: true,
      can_see_bank_account_swift_bic: true,
      can_see_bank_account_type: true,
      can_see_comments: true,
      can_see_corporate_location: true,
      can_see_image_url: true,
      can_see_images: true,
      can_see_more_info: true,
      can_see_open_corporates_url: true,
      can_see_other_account_bank_name: true,
      can_see_other_account_iban: true,
      can_see_other_account_kind: true,
      can_see_other_account_metadata: true,
      can_see_other_account_national_identifier: true,
      can_see_other_account_number: true,
      can_see_other_account_swift_bic: true,
      can_see_owner_comment: true,
      can_see_physical_location: true,
      can_see_private_alias: true,
      can_see_public_alias: true,
      can_see_tags: true,
      can_see_transaction_amount: true,
      can_see_transaction_balance: true,
      can_see_transaction_currency: true,
      can_see_transaction_description: true,
      can_see_transaction_finish_date: true,
      can_see_transaction_metadata: true,
      can_see_transaction_other_bank_account: true,
      can_see_transaction_start_date: true,
      can_see_transaction_this_bank_account: true,
      can_see_transaction_type: true,
      can_see_url: true,
      can_see_where_tag: true,
      can_see_bank_routing_scheme: true,
      can_see_bank_routing_address: true,
      can_see_bank_account_routing_scheme: true,
      can_see_bank_account_routing_address: true,
      can_see_other_bank_routing_scheme: true,
      can_see_other_bank_routing_address: true,
      can_see_other_account_routing_scheme: true,
      can_see_other_account_routing_address: true,
      can_add_transaction_request_to_own_account: true,
      can_add_transaction_request_to_any_account: true,
      can_see_bank_account_credit_limit: true
    },
    error_response_bodies: [
      'OBP-10001: Incorrect json format.',
      'OBP-20001: User not logged in. Authentication is required!',
      'OBP-30018: Bank Account not found. Please specify valid values for BANK_ID and ACCOUNT_ID. ',
      'OBP-50000: Unknown Error.'
    ],
    is_core: false,
    is_psd2: false,
    is_obwg: false,
    tags: [
      'System-View',
      'New-Style'
    ],
    typed_request_body: {
      type: 'object',
      properties: {
        allowed_actions: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        description: {
          type: 'string'
        },
        hide_metadata_if_alias_used: {
          type: 'boolean'
        },
        metadata_view: {
          type: 'string'
        },
        is_public: {
          type: 'boolean'
        },
        which_alias_to_use: {
          type: 'string'
        }
      }
    },
    typed_success_response_body: {
      type: 'object',
      properties: {
        can_see_other_account_swift_bic: {
          type: 'boolean'
        },
        can_see_where_tag: {
          type: 'boolean'
        },
        can_see_url: {
          type: 'boolean'
        },
        can_see_bank_account_swift_bic: {
          type: 'boolean'
        },
        can_see_bank_account_routing_address: {
          type: 'boolean'
        },
        can_see_tags: {
          type: 'boolean'
        },
        can_see_transaction_balance: {
          type: 'boolean'
        },
        can_delete_corporate_location: {
          type: 'boolean'
        },
        can_add_image_url: {
          type: 'boolean'
        },
        can_see_public_alias: {
          type: 'boolean'
        },
        can_add_transaction_request_to_own_account: {
          type: 'boolean'
        },
        can_add_comment: {
          type: 'boolean'
        },
        can_see_other_bank_routing_scheme: {
          type: 'boolean'
        },
        description: {
          type: 'string'
        },
        can_see_corporate_location: {
          type: 'boolean'
        },
        can_see_other_account_bank_name: {
          type: 'boolean'
        },
        can_see_more_info: {
          type: 'boolean'
        },
        can_add_counterparty: {
          type: 'boolean'
        },
        can_see_physical_location: {
          type: 'boolean'
        },
        can_query_available_funds: {
          type: 'boolean'
        },
        can_edit_owner_comment: {
          type: 'boolean'
        },
        can_see_private_alias: {
          type: 'boolean'
        },
        can_see_bank_account_credit_limit: {
          type: 'boolean'
        },
        can_see_other_account_routing_address: {
          type: 'boolean'
        },
        can_see_bank_account_balance: {
          type: 'boolean'
        },
        can_add_public_alias: {
          type: 'boolean'
        },
        can_see_bank_routing_scheme: {
          type: 'boolean'
        },
        can_see_bank_account_owners: {
          type: 'boolean'
        },
        can_see_other_account_metadata: {
          type: 'boolean'
        },
        can_delete_physical_location: {
          type: 'boolean'
        },
        hide_metadata_if_alias_used: {
          type: 'boolean'
        },
        can_see_transaction_this_bank_account: {
          type: 'boolean'
        },
        can_see_image_url: {
          type: 'boolean'
        },
        can_see_transaction_type: {
          type: 'boolean'
        },
        can_see_images: {
          type: 'boolean'
        },
        can_see_transaction_amount: {
          type: 'boolean'
        },
        metadata_view: {
          type: 'string'
        },
        can_see_transaction_metadata: {
          type: 'boolean'
        },
        can_see_comments: {
          type: 'boolean'
        },
        can_see_other_account_iban: {
          type: 'boolean'
        },
        can_add_image: {
          type: 'boolean'
        },
        can_see_bank_account_routing_scheme: {
          type: 'boolean'
        },
        can_see_bank_account_type: {
          type: 'boolean'
        },
        can_see_other_account_kind: {
          type: 'boolean'
        },
        can_see_bank_account_currency: {
          type: 'boolean'
        },
        can_add_where_tag: {
          type: 'boolean'
        },
        can_see_transaction_start_date: {
          type: 'boolean'
        },
        can_see_bank_account_label: {
          type: 'boolean'
        },
        can_add_private_alias: {
          type: 'boolean'
        },
        can_see_transaction_currency: {
          type: 'boolean'
        },
        can_add_more_info: {
          type: 'boolean'
        },
        can_delete_comment: {
          type: 'boolean'
        },
        can_see_other_bank_routing_address: {
          type: 'boolean'
        },
        can_see_transaction_other_bank_account: {
          type: 'boolean'
        },
        can_see_bank_account_number: {
          type: 'boolean'
        },
        can_add_corporate_location: {
          type: 'boolean'
        },
        alias: {
          type: 'string'
        },
        can_add_url: {
          type: 'boolean'
        },
        short_name: {
          type: 'string'
        },
        can_delete_where_tag: {
          type: 'boolean'
        },
        is_public: {
          type: 'boolean'
        },
        can_see_owner_comment: {
          type: 'boolean'
        },
        can_see_transaction_finish_date: {
          type: 'boolean'
        },
        can_see_open_corporates_url: {
          type: 'boolean'
        },
        can_add_physical_location: {
          type: 'boolean'
        },
        can_see_bank_account_iban: {
          type: 'boolean'
        },
        can_see_other_account_national_identifier: {
          type: 'boolean'
        },
        can_see_bank_routing_address: {
          type: 'boolean'
        },
        can_delete_image: {
          type: 'boolean'
        },
        can_add_transaction_request_to_any_account: {
          type: 'boolean'
        },
        can_add_tag: {
          type: 'boolean'
        },
        id: {
          type: 'string'
        },
        can_see_other_account_routing_scheme: {
          type: 'boolean'
        },
        can_add_open_corporates_url: {
          type: 'boolean'
        },
        can_delete_tag: {
          type: 'boolean'
        },
        can_see_transaction_description: {
          type: 'boolean'
        },
        can_see_bank_account_national_identifier: {
          type: 'boolean'
        },
        can_see_other_account_number: {
          type: 'boolean'
        },
        can_see_bank_account_bank_name: {
          type: 'boolean'
        }
      }
    },
    roles: [{
      role: 'CanUpdateSystemView',
      requires_bank_id: false
    }],
    is_featured: false,
    special_instructions: '',
    specified_url: '/obp/v4.0.0/system-views/VIEW_ID'
  },
  {
    operation_id: 'OBPv2.0.0-publicAccountsAllBanks',
    implemented_by: {
      version: 'OBPv2.0.0',
      'function': 'publicAccountsAllBanks'
    },
    request_verb: 'GET',
    request_url: '/obp/v2.0.0/accounts/public',
    summary: 'Get Public Accounts at all Banks.',
    description: '<p>Get public accounts at all banks (Anonymous access).<br />\nReturns accounts that contain at least one public view (a view where is_public is true)<br />\nFor each account the API returns the ID and the available views.</p>\n<p>Authentication is Optional</p>\n',
    description_markdown: 'Get public accounts at all banks (Anonymous access).\nReturns accounts that contain at least one public view (a view where is_public is true)\nFor each account the API returns the ID and the available views.\n\nAuthentication is Optional\n\n',
    example_request_body: {
      jsonString: '{}'
    },
    success_response_body: {
      accounts: [{
        id: '8ca8a7e4-6d02-48e3-a029-0b2bf89de9f0',
        label: 'NoneLabel',
        bank_id: 'GENODEM1GLS',
        views_available: [{
          id: '1',
          short_name: 'HHH',
          is_public: true
        }]
      }]
    },
    error_response_bodies: [
      'OBP-20001: User not logged in. Authentication is required!',
      'Could not get accounts.',
      'OBP-50000: Unknown Error.'
    ],
    is_core: false,
    is_psd2: false,
    is_obwg: false,
    tags: [
      'Account-Public',
      'Account',
      'PublicData'
    ],
    typed_request_body: {
      type: 'object',
      properties: {
        jsonString: {
          type: 'string'
        }
      }
    },
    typed_success_response_body: {
      type: 'object',
      properties: {
        accounts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              views_available: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    is_public: {
                      type: 'boolean'
                    },
                    short_name: {
                      type: 'string'
                    },
                    id: {
                      type: 'string'
                    }
                  }
                }
              },
              bank_id: {
                type: 'string'
              },
              label: {
                type: 'string'
              },
              id: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    is_featured: false,
    special_instructions: '',
    specified_url: '/obp/v4.0.0/accounts/public'
  },
  {
    operation_id: 'OBPv3.1.0-getTaxResidence',
    implemented_by: {
      version: 'OBPv3.1.0',
      'function': 'getTaxResidence'
    },
    request_verb: 'GET',
    request_url: '/obp/v3.1.0/banks/BANK_ID/customers/CUSTOMER_ID/tax-residences',
    summary: 'Get Tax Residences of Customer',
    description: '<p>Get the Tax Residences of the Customer specified by CUSTOMER_ID.</p>\n<p>Authentication is Mandatory</p>\n',
    description_markdown: 'Get the Tax Residences of the Customer specified by CUSTOMER_ID.\n\n\nAuthentication is Mandatory\n\n',
    example_request_body: {
      jsonString: '{}'
    },
    success_response_body: {
      tax_residence: [{
        domain: 'Enter some domain',
        tax_number: 'Enter some number',
        tax_residence_id: '902ba3bb-dedd-45e7-9319-2fd3f2cd98a1'
      }]
    },
    error_response_bodies: [
      'OBP-20001: User not logged in. Authentication is required!',
      'OBP-20006: User is missing one or more roles: ',
      'OBP-50000: Unknown Error.'
    ],
    is_core: false,
    is_psd2: false,
    is_obwg: false,
    tags: [
      'Customer',
      'KYC',
      'New-Style'
    ],
    typed_request_body: {
      type: 'object',
      properties: {
        jsonString: {
          type: 'string'
        }
      }
    },
    typed_success_response_body: {
      type: 'object',
      properties: {
        tax_residence: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tax_residence_id: {
                type: 'string'
              },
              tax_number: {
                type: 'string'
              },
              domain: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    is_featured: false,
    special_instructions: '',
    specified_url: '/obp/v4.0.0/banks/BANK_ID/customers/CUSTOMER_ID/tax-residences'
  }
]