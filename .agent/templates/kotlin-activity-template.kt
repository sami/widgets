package com.example.template

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
// import com.example.template.databinding.ActivityTemplateBinding

class TemplateActivity : AppCompatActivity() {

    // View Binding is recommended, but using findViewById for generic template
    // private lateinit var binding: ActivityTemplateBinding
    private lateinit var titleTextView: TextView
    private lateinit var actionButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // binding = ActivityTemplateBinding.inflate(layoutInflater)
        // setContentView(binding.root)
        setContentView(R.layout.activity_template) // Assumes layout exists

        setupViews()
        setupListeners()
        
        Log.d(TAG, "onCreate: Activity initialized")
    }

    private fun setupViews() {
        titleTextView = findViewById(R.id.titleTextView)
        actionButton = findViewById(R.id.actionButton)
        
        titleTextView.text = "Hello Android"
    }

    private fun setupListeners() {
        actionButton.setOnClickListener {
            Log.d(TAG, "Button Clicked")
            // Perform action
        }
    }

    override fun onStart() {
        super.onStart()
        Log.d(TAG, "onStart")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy")
    }

    companion object {
        private const val TAG = "TemplateActivity"

        /**
         * Static factory method to create Intent for this activity
         */
        fun newIntent(context: Context, data: String): Intent {
            return Intent(context, TemplateActivity::class.java).apply {
                putExtra("EXTRA_DATA", data)
            }
        }
    }
}
